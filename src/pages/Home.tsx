import React, { useState, useEffect } from 'react';
import { 
  View,
  Text,
  StyleSheet, 
  TextInput, 
  Platform,
  FlatList,
} from 'react-native'
import { Button } from '../components/button';
import { SkillCard } from '../components/SkillCard';

type SkillData = {
    id: string;
    name: string;
}

export default function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greetings, setGreetings] = useState('');

  function handleAddNewSkill(){
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id:string){
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if(currentHour < 12){
      setGreetings('Good morning');
    } 
    else if(currentHour >= 12 && currentHour < 18){
      setGreetings('Good afternoon')
    } else {
      setGreetings('Good night')
    }
  }, [mySkills])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Gabriel
      </Text> 

      <Text style={styles.greetings}>
        { greetings }
      </Text>

      <TextInput 
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

     <Button 
        onPress={handleAddNewSkill}
        title="Adicionar"
        />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>


      <FlatList 
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name} 
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1, 
      backgroundColor: '#161E2F',
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  title: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  greetings: {
    color: '#fff',
  }
});