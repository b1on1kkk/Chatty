export interface ServerToClientEvents {
  serverMessage: (data: {
    msg: string;
    room: string;
    sender_id: number;
  }) => void;
  getOnlineUsersId: (data: { user_id: number; socket_id: string }[]) => void;
}

export interface ClientToServerEvents {
  clientMessage: (data: {
    msg: string;
    room: string;
    sender_id: number;
  }) => void;
  userConnected: (data: { new_connected_user_id: number }) => void;
}
