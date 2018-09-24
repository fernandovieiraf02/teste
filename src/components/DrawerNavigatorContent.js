import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Content, Footer } from 'native-base';
import Styles from '../utils/Styles';
import Colors from '../utils/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerItems } from 'react-navigation';


const EdgeDivisor = () => (
    <View style={ Styles.DrawerNavigatorEdgeDivisor } />
);

const UserIconDefault = () => (
    <View 
        style={{ borderRadius: 60, backgroundColor: 'white' }}
    >
        <Icon name='person' size={100} color={ Colors.iconUserDefaultColor }/>
    </View>
);

const DrawerNavigatorContent = (props) => (
  <Container style={{ flex: 1 }}>
    <TouchableOpacity style={{ flex: 1/4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.drawerHeaderBackground }}>
        <UserIconDefault />

        <View style={{ marginLeft: 15 }}>
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 24 }}>Empresa Teste</Text>
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>Pessoa teste</Text>
        </View>
    </TouchableOpacity>
    <View style={ Styles.DrawerNavigatorContent }>
      <DrawerItems {...props} />
    </View>
    <EdgeDivisor/>
    <View style={ Styles.DrawerNavigatorFooter }>
        <Text style={ Styles.DrawerNavigatorLabelText }>Configurações</Text>
        <Text style={ Styles.DrawerNavigatorLabelText }>Avalie-nos</Text>
    </View>
  </Container>
);

export default DrawerNavigatorContent;