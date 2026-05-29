interface IFSNode {
    name: string;
    id: string;
    type: string;
    path: string;
    createdAt: Date;
    contentKey: string;
    parentId: string | null;
};

export { type IFSNode };