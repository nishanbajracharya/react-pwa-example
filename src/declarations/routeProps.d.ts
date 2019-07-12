declare module 'RouteProps' {
  import { RouteComponentProps } from 'react-router-dom';

  interface IMatchParams {
    id: string;
  }

  interface IProps extends RouteComponentProps<MatchParams> {

  }
}
