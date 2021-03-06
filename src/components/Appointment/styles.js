import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-top: 4px;
`;

export const Time = styled.Text``;
