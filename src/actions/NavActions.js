import { NavigationActions } from "react-navigation";

export const navigateToPage = (pageName, data) => {
  return NavigationActions.navigate({
    routeName: pageName,
    params: data
  });
};
