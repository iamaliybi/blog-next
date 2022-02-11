export interface MutableRef<T> {
    current: T
}

export namespace PostType {
    export type id = number;
    export type userId = number;
    export type title = string;
    export type body = string;

    export interface PostObj {
        id: PostType.id;
        userId: PostType.userId;
        title: PostType.title;
        body: PostType.body;
    }

    export type PostObjects = PostObj[];
}

export type PostObj = PostType.PostObj;