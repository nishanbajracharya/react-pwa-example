declare module 'RouteProps' {
  import { RouteComponentProps } from 'react-router-dom';

  interface MatchParams {
    id: string;
  }

  interface Props extends RouteComponentProps<MatchParams> {

  }
}
