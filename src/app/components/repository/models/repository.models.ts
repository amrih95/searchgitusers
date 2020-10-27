import { Profile } from 'src/app/views/profile/models/profile.models';

export class Repository {
  id: string;
  name: string;
  full_name: string;
  owner: Profile;
  description: string;
  git_url: string;
  forks: number;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  language: string;
  size: number;
  forks_url: string;
  has_downloads: boolean;
  downloads_url: string;
  clone_url: string;
}
