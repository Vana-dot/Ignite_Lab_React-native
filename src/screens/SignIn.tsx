import { useState } from "react";
import { VStack,Heading,Icon,useTheme} from "native-base";
import Logo  from '../assets/logo_primary.svg';
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import {Envelope,Key} from 'phosphor-react-native';

export function SignIn(){
    const [name, setName] = useState('');
    const [Password, setPassword] = useState('');

    const {colors} = useTheme();
    return(
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
            <Logo/>
           <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
              Acesse sua conta</Heading>
           
           <Input
             placeholder="E-mail" 
             mb={4}        
             InputLeftElement={<Icon ml={2} as={<Envelope color={colors.gray[300]}/>}/>}
             onChangeText={setName}
           />
            <Input
            mb={8}
             placeholder="Senha"  
             InputLeftElement={<Icon ml={2} as={
             <Key
               color={colors.gray[300]}
             />
            }
            />}
            secureTextEntry     
            onChangeText={setPassword}    
           />
            
           <Button title="Entrar" w="full"/>

        </VStack>
    )
}
