interface IProject {
    userId: string | null;
    fsnodeId: string;
    name: string;
    isTemporary: boolean;
    id: string;
    createdAt: Date;
    expiresAt: Date | null;
};

export { type IProject };