import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PARTNERS } from '../shared/partners';

function RenderItem({item}) {
    if (item) {
        return (
            <Card>
                <Text>
                    We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.  
                </Text>
                <FlatList
                data={this.state.campsites}
                renderItem={renderAboutItem}
                keyExtractor={item => item.id.toString()}
            />
            </Card>
        );
    }
    return <View />;
}

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            partners: PARTNERS,
        };
    }

    static navigationOptions = {
        title: 'About'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderAboutItem = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.name}
                    leftAvatar={{ source: require('./images/bootstrap-logo.png') }}
                />
            );
        };
        return (
            <ScrollView>
                <RenderItem 
                    item={this.state.partners.filter(partner => partner.featured)[0]} />  
            </ScrollView>
        );
    }
}

export default About;
