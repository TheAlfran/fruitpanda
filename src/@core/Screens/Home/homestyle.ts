import styled from "styled-components/native";

export const ParentContainer = styled.View`
  background-color: #fff;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.View`
  background-color: #fff;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #b30000;
  text-align: center;
  padding-top: 30px;
`;

export const SwiperContainer = styled.View`
  background-color: #fff;
  height: 400px;
  width: 400px;
  padding: 20px;
`;

export const SlideImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const SlideText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-decoration: solid;
  text-align: center;
  margin-top: -20px;
  color: #ffa726;
`;

export const StartButtonContainer = styled.View`
  background-color: #fff;
  margin-top: 15px;
  padding: 5px;
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
`;

export const StartButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #ff6666;
  border-radius: 50px;
  padding: 15px;
  width: 80%;
  background-color: #ff6666;
`;

export const StartButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  color: #ffc966;
`;

export const FooterContainer = styled.View`
  width: 100%;
  justify-content: center;
  margin-top: 30px;
`;

export const FooterText = styled.Text`
  font-size: 16px;
  color: black;
  text-align: center;
`;

export const FooterTextButton = styled.Text`
  color: blue;
  font-size: 16px;
  text-align: center;
`;

export const FooterContainer2 = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const FooterButton = styled.TouchableOpacity`
  font-size: 16px;
  color: black;
`;
