export enum QueueType {
  post = 'post',
  get = 'get',
}

export interface INetwork {
  post: any[];
  get: any[];
}
