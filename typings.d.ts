export interface ServerToClientEvents {
  getOnlineUsersId: (data: { user_id: number; socket_id: string }[]) => void;
  privateServerMessage: (data: { text: string; sender_id: number }) => void;
}

export interface ClientToServerEvents {
  userConnected: (data: { new_connected_user_id: number }) => void;
  privateMessage: (data: { text: string; user_id: number }) => void;
}
