export interface FoodNode {
    name: string;
    children?: FoodNode[];
}

export const FOOD_DATA: FoodNode[] = [
    {
        name: 'Fruit',
        children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
    },
    {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
            },
            {
                name: 'Orange',
                children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
            },
        ],
    },
];

/** Flat node with expandable and level information */
export interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
}