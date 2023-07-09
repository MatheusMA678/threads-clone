export interface PostTypes {
  id: number
  body: string
  userId: number
  reactions: number
}

export interface IPosts {
  posts: PostTypes[]
  total: number
}
