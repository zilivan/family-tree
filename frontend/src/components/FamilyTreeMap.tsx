import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
import dagre from "cytoscape-dagre";
import type { NodeSingular, ElementDefinition } from "cytoscape";

cytoscape.use(dagre);
type Marriage = Array<{
  husbandId: string;
  wifeId: string;
}>;
type Person = Array<{
  id: string;
  firstName: string;
  lastName: string;
  patronymic?: string | null;
  gender?: string | null;
  fatherId?: string | null;
  motherId?: string | null;
}>;

interface FamilyTreeMapProps {
  persons: Person;
  marriages: Marriage;
  onClose: () => void;
  onPersonClick: (personId: string) => void;
}
type Stylesheet = Array<{
  selector: string;
  style: Record<string, string | number | ((ele: NodeSingular) => string)>;
}>;

export function FamilyTreeMap({
  persons,
  marriages,
  onClose,
  onPersonClick,
}: FamilyTreeMapProps) {
  // Функция для создания полного графа
  const createFamilyTreeElements = (
    persons: Person,
    marriages: Marriage,
  ): ElementDefinition[] => {
    const elements: ElementDefinition[] = [];

    // Добавляем узлы
    persons.forEach((person) => {
      elements.push({
        data: {
          id: person.id,
          label: `${person.lastName} ${person.firstName} ${person.patronymic}`,
          gender: person.gender,
        },
      });
    });

    //  Связи "Родитель → Ребёнок"
    persons.forEach((person) => {
      if (person.fatherId) {
        elements.push({
          data: {
            source: person.fatherId,
            target: person.id,
            directed: true,
            type: "parent-child",
          },
        });
      }
      if (person.motherId) {
        elements.push({
          data: {
            source: person.motherId,
            target: person.id,
            directed: true,
            type: "parent-child",
          },
        });
      }
    });

    //  Связи "Супруг ↔ Супруг" (ненаправленные)
    marriages.forEach((marriage, index) => {
      elements.push({
        data: {
          id: `marriage-${index}`,
          source: marriage.husbandId,
          target: marriage.wifeId,
          type: "marriage",
          // Ненаправленная связь
        },
      });
    });

    return elements;
  };

  const elements = createFamilyTreeElements(persons, marriages);

  //  Стили как массив объектов
  const stylesheet: Stylesheet = [
    // Стили для узлов
    {
      selector: "node",
      style: {
        "background-color": (ele) =>
          ele.data("gender") === "female" ? "#ff9ec8" : "#64b5f6",
        label: "data(label)",
        "text-valign": "center",
        "text-halign": "center",
        color: "#000",
        "font-size": "10px",
        width: "80px",
        height: "60px",
        shape: "roundrectangle",
        "text-wrap": "wrap",
        "text-max-width": "70px",
      },
    },

    // Стили для направленных рёбер (родитель → ребёнок)
    {
      selector: 'edge[type = "parent-child"]',
      style: {
        width: "2px",
        "line-color": "#4caf50",
        "target-arrow-shape": "triangle",
        "target-arrow-color": "#4caf50",
        "curve-style": "bezier",
      },
    },

    // Стили для ненаправленных рёбер (супруги)
    {
      selector: 'edge[type = "marriage"]',
      style: {
        width: "3px",
        "line-color": "#2196f3",
        "curve-style": "straight",
      },
    },
  ];

  const layout = {
    name: "dagre",
    nodeSep: 60,
    edgeSep: 30,
    rankSep: 120,
    rankDir: "TB" as const, // Top to Bottom
    animate: true,
    animationDuration: 500,
  };

  return (
    <div style={{ position: "relative", height: "80vh" }}>
      <CytoscapeComponent
        elements={elements}
        stylesheet={stylesheet}
        layout={layout}
        style={{ width: "100%", height: "100%" }}
        zoomingEnabled={true}
        userPanningEnabled={true}
        minZoom={0.1}
        maxZoom={2.0}
        cy={(cy) => {
          cy.on("tap", "node", (evt) => {
            const personId = evt.target.data("id");
            if (personId) {
              onPersonClick(personId);
              onClose();
            }
          });
        }}
      />
    </div>
  );
}
