import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';
import Background from '~/components/Background';

import {
  Container,
  Title,
  Separator,
  Form,
  FormInput,
  SubmitButton,
  LogoutButton,
} from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }

  function handleLogout() {
    dispatch(signOut());
  }

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  return (
    <Background>
      <Container>
        <Title>Meu perfil</Title>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Email"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <Separator />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha atual"
            ref={oldPasswordRef}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirmação de senha"
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <SubmitButton onPress={handleSubmit}>Atualizar Perfil</SubmitButton>
          <LogoutButton onPress={handleLogout}>Sair do GoBarber</LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
