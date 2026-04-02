// Stub auth — no authentication in this project
type Session = { user: { id: string; email: string } | null } | null;

export const auth = {
  api: {
    getSession: async (_opts?: unknown): Promise<Session> => null,
  },
};
