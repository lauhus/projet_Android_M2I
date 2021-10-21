import {
  View,
  Text,
  Alert,
  TouchableHighlight,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {ListeStore} from './store/listeStore';
import {TCharac} from './store/listeStore';
import styles from './styles/liste.style';
import {CardListe} from './CardListe';

export class Liste extends React.Component<any, any> {
  state = {
    title: 'Résultat',
    characters: [],
    isLoading: true,
    reload: false,
    choice: 'hp',
    gender: '',
  };

  constructor(props) {
    super(props);
    let listeStore = new ListeStore({choice: this.state.choice});
    listeStore
      .fetchCharacters()
      .then(response => {
        if (!response) {
          this.setState({
            ...this.state,
            isLoading: false,
          });
        }
        response.json().then((characters: TCharac[]) => {
          this.setState({
            ...this.state,

            characters:
              this.state.gender != ''
                ? characters.filter(x => x.gender === this.state.gender)
                : characters.sort((a, b) => (a.name > b.name ? 1 : -1)),
            isLoading: false,
          });
        });
      })
      .catch(e => {
        console.log(e);
        this.setState({
          ...this.state,
          isLoading: false,
        });
        Alert.alert('Une erreur est survenue', 'Veuillez recharger', [
          {
            text: 'Recharger',
            onPress: () => this.setState({...this.state, reload: true}),
          },
        ]);
      });
  }

  componentDidUpdate() {
    if (this.state.reload) {
      this.setState({...this.state, reload: false});
      let listeStore = new ListeStore({choice: this.state.choice});
      listeStore
        .fetchCharacters()
        .then(response => {
          if (!response) {
            this.setState({
              ...this.state,
              isLoading: false,
            });
          }
          response.json().then((characters: TCharac[]) => {
            this.setState({
              ...this.state,
              characters:
                this.state.gender != ''
                  ? characters.filter(x => x.gender === this.state.gender)
                  : characters.sort((a, b) => (a.name > b.name ? 1 : -1)),
              isLoading: false,
            });
          });
        })
        .catch(e => {
          console.log(e);
          this.setState({
            ...this.state,
            isLoading: false,
          });
          Alert.alert('Une erreur est survenue', 'Veuillez recharger', [
            {
              text: 'Recharger',
              onPress: () => this.setState({...this.state, reload: true}),
            },
          ]);
        });
    }
  }
  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.title}>
          <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../assets/arrowLeft.png')} />
          </TouchableHighlight>
          {this.state.title}
        </Text>
        <ScrollView>
          {this.state.characters.map((character: TCharac) => {
            return <CardListe key={character._id} character={character} />;
          })}
        </ScrollView>
        {this.state.isLoading && (
          <View style={styles.loader}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </View>
    );
  }
}
