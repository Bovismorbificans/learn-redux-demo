import { Tabs } from 'antd';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { history } from 'umi';
import { store } from '../store';
import type { IRouteComponentProps, Location } from 'umi';

const IndexPage: FC<{ route: IRouteComponentProps; location: Location }> = (
  props,
) => {
  const tabsChange = (value: string) => {
    history.push(value);
  };

  const tabsItems = (props.route.routes || []).map((item) => ({
    key: item.path || '',
    label: item.title,
  }));
  console.log('props', props.location);

  if (props?.location?.pathname === '/') {
    history.push(props.route.routes[0].path || '');
  }
  return (
    <Provider store={store}>
      <Tabs
        defaultActiveKey="/counter"
        items={tabsItems}
        onChange={tabsChange}
      />
      <div>{props.children}</div>
    </Provider>
  );
};

export default IndexPage;
