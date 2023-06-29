import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import styleExterno from '../styles';

const Body = () => {
    return (
        <View>
            <View style={styles.view}>
                <Image style={{ width: 90, height: 90 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                <Text style={styleExterno.fontStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada porta tincidunt. Nunc gravida nisl neque, vitae commodo tortor suscipit sed. Suspendisse ultrices gravida dui, nec ullamcorper elit ultricies vitae. Aliquam in tincidunt magna, ut commodo ligula. Sed condimentum dui nunc, in eleifend neque lacinia quis. Fusce felis quam, tincidunt ut sodales id, rhoncus ut est. Etiam ac urna non mi hendrerit porttitor. Nullam eget sem vitae ante fringilla laoreet. Nam id sapien est. Fusce a est at enim lacinia consectetur. Suspendisse ultricies felis vel tempus bibendum. Suspendisse potenti. Praesent elit ligula, commodo eget leo in, venenatis vehicula nulla. Duis eros lacus, auctor vitae libero vel, dapibus cursus orci. Morbi hendrerit, ante at placerat aliquet, metus ipsum tincidunt ipsum, in viverra ex nisl sit amet tortor. In sodales accumsan urna, in congue enim eleifend lacinia. Vestibulum ut accumsan mi. Phasellus vestibulum, nibh in suscipit porttitor, ipsum arcu faucibus leo, non feugiat nisl elit sit amet mauris. Vivamus finibus massa eu lacus euismod mattis. Donec fringilla dictum lacus cursus dignissim. Fusce erat justo, varius vitae leo a, hendrerit tempus ligula. Phasellus elit lacus, sodales vitae ipsum fringilla, pulvinar laoreet justo. Nulla commodo at turpis sed tincidunt. Maecenas mauris mi, dignissim nec neque at, interdum bibendum felis. Sed vel est sit amet justo vehicula cursus. Integer venenatis bibendum sapien, vel auctor lectus. Nulla diam felis, ultrices vitae ultricies eu, fringilla vitae quam. Curabitur bibendum molestie arcu vel sagittis. In eget tellus quis nisl posuere eleifend id vitae ipsum. Etiam non libero eget augue varius euismod non ut arcu. Quisque imperdiet, leo in efficitur euismod, arcu erat interdum nisi, sit amet dapibus elit ante non nulla. Curabitur enim dolor, porttitor nec eros eget, pharetra vestibulum elit.
                </Text>
            </View>
            <View style={styles.view}>
                <Image style={{ width: 90, height: 90 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada porta tincidunt. Nunc gravida nisl neque, vitae commodo tortor suscipit sed. Suspendisse ultrices gravida dui, nec ullamcorper elit ultricies vitae. Aliquam in tincidunt magna, ut commodo ligula. Sed condimentum dui nunc, in eleifend neque lacinia quis. Fusce felis quam, tincidunt ut sodales id, rhoncus ut est. Etiam ac urna non mi hendrerit porttitor. Nullam eget sem vitae ante fringilla laoreet. Nam id sapien est. Fusce a est at enim lacinia consectetur. Suspendisse ultricies felis vel tempus bibendum. Suspendisse potenti. Praesent elit ligula, commodo eget leo in, venenatis vehicula nulla. Duis eros lacus, auctor vitae libero vel, dapibus cursus orci. Morbi hendrerit, ante at placerat aliquet, metus ipsum tincidunt ipsum, in viverra ex nisl sit amet tortor. In sodales accumsan urna, in congue enim eleifend lacinia. Vestibulum ut accumsan mi. Phasellus vestibulum, nibh in suscipit porttitor, ipsum arcu faucibus leo, non feugiat nisl elit sit amet mauris. Vivamus finibus massa eu lacus euismod mattis. Donec fringilla dictum lacus cursus dignissim. Fusce erat justo, varius vitae leo a, hendrerit tempus ligula. Phasellus elit lacus, sodales vitae ipsum fringilla, pulvinar laoreet justo. Nulla commodo at turpis sed tincidunt. Maecenas mauris mi, dignissim nec neque at, interdum bibendum felis. Sed vel est sit amet justo vehicula cursus. Integer venenatis bibendum sapien, vel auctor lectus. Nulla diam felis, ultrices vitae ultricies eu, fringilla vitae quam. Curabitur bibendum molestie arcu vel sagittis. In eget tellus quis nisl posuere eleifend id vitae ipsum. Etiam non libero eget augue varius euismod non ut arcu. Quisque imperdiet, leo in efficitur euismod, arcu erat interdum nisi, sit amet dapibus elit ante non nulla. Curabitur enim dolor, porttitor nec eros eget, pharetra vestibulum elit.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 30
    },

    text: {
        width: '70%',
        paddingLeft: 20,
        paddingRight: 20
    }
})

export default Body;