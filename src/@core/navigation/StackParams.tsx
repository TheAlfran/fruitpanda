import { NavigatorScreenParams } from "@react-navigation/native";
declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList,
        EntryStackParamList,
        MainBottomParamList{}
  }
}
export type RootStackParamList = {
  Entry: NavigatorScreenParams<EntryStackParamList> | {userId: string};
  Main: NavigatorScreenParams<MainBottomParamList> | undefined;
  
};

export type EntryStackParamList = {
  Home: undefined;
  Login: undefined;
  Navigate:{userId : string}  | undefined;
  Checkout: undefined;
  Payment:undefined;
  Location: undefined;


};


export type MainBottomParamList = {
  Home1: undefined;
  AddCart1: undefined;
  Navigator1: {userId : string} | undefined;
  AddCart: undefined;
  Checkout: undefined;
  Payment: undefined;
  Profile: {userId: string} | undefined;
  Location: undefined;

};
