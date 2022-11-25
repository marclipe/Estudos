interface Post {
  id: number;
  title: string;
  description: string;
}

//Pick & Omit
// type PostPreview = Pick<Post, 'id' | 'title'>;

// let post: PostPreview;

type PostPreview = Omit<Post, 'id' | 'title'>;

let post: PostPreview;

//agora tenho acesso a description diferente dp Pick
post.description;
