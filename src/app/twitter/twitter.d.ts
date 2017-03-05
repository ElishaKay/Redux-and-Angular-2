interface IAppState {
  posts: IPost[];
  user: IUser;
  newPostIds: string[];
}

interface IPost {
  id: string;
  createdAt: Date;
  handle: string;
  name: string;
  profilePhotoURL: string;
  text: string;
  liked?: boolean;
  reposted?: boolean;
}

interface IUser {
  name: string;
  handle: string;
  headerPhotoURL: string;
  profilePhotoURL: string;
}
