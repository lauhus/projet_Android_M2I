import {
  View,
  Text,
  Alert,
  TouchableHighlight,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import {ListeStore} from './store/listeStore';
import {TCharac} from './store/listeStore';
import styles from './styles/liste.style';
import {CardListe} from './CardListe';

type Props = {
  route: {params: {choice: string; gender: string}};
};
export class Liste extends React.Component<any, any> {
  state = {
    title: 'Résultat',
    characters: [],
    isLoading: true,
    reload: false,
    choice: '',
    gender: '',
  };

  constructor(props: Props) {
    super(props);
    this.state.choice = props.route.params.choice;
    this.state.gender = props.route.params.gender;
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
              this.state.gender != 'other'
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
                this.state.gender != 'other'
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
        <View style={styles.title}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.image}
              source={require('../assets/arrowLeft.png')}
            />
          </TouchableNativeFeedback>
          <Text style={styles.text}>{this.state.title}</Text>
        </View>
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
