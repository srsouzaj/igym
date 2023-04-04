import { TouchableOpacity } from 'react-native';
import { Heading, HStack, Text, VStack, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import { UserPhoto } from './UserPhoto';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { useNavigation } from '@react-navigation/native';

export function HomeHeader() {

    const navigation = useNavigation<AuthNavigatorRoutesProps>();


    return (
        <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
            <UserPhoto
                source={{ uri: 'https://github.com/srsouzaj.png' }}
                size={16}
                alt="Imagem do usuário"
                mr={4}
            />

            <VStack flex={1}>
                <Text color="gray.100" fontSize="md">
                    Olá,
                </Text>
                <Heading color="gray.100" fontSize="md">
                    Jorge
                </Heading>
            </VStack>


            <TouchableOpacity>
                <Icon
                    as={MaterialIcons}
                    name="logout"
                    color="gray.200"
                    size={7}
                    onPress={() => navigation.navigate('signIn')}
                />
            </TouchableOpacity>
        </HStack>
    );
}