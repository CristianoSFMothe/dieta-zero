import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import { colors } from '@/constants/colors';
import { Header } from '@/components/header';
import { Input } from '@/components/input'
import { router } from 'expo-router'

import  { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { useDataStore } from '@/store/data'

const schema = z.object({
  name: z.string().min(1, { message: 'O nome é obrigatório.'}),
  weight: z.string().min(1, { message: 'O peso é obrigatório.'}),
  age: z.string().min(1, { message: 'A idade é obrigatório.'}),
  height: z.string().min(1, { message: 'A altura é obrigatório.'}),
})

type FormData = z.infer<typeof schema>

const Step = () => {

  const { control, handleSubmit, formState: { errors, isValid }} = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const setPageOne = useDataStore(state => state.setPageOne)

  const handleCreate = (data: FormData) => {
    setPageOne({
      name: data.name,
      weight: data.weight,
      height: data.height,
      age: data.age
    })
    
    router.push('/create')
  }

  return (
    <View style={styles.container}>
      <Header
        step='passo 1'
        title='Vamos começar'
      />

      <ScrollView style={styles.content}>
        <Text style={styles.label}>Nome:</Text>
        <Input 
          name='name'
          control={control}
          placeholder='Digite seu nome...'
          error={errors.name?.message}
          keyboardType='default'
        />

        <Text style={styles.label}>Peso:</Text>
        <Input 
          name='weight'
          control={control}
          placeholder='Seu peso atual em quilos (Ex.: 75)'
          error={errors.name?.message}
          keyboardType='numeric'
        />

        <Text style={styles.label}>Altura:</Text>
        <Input 
          name='height'
          control={control}
          placeholder='Sua altura atual em metros (Ex.: 1.90)'
          error={errors.name?.message}
          keyboardType='numeric'
        />

        <Text style={styles.label}>Idade:</Text>
        <Input 
          name='age'
          control={control}
          placeholder='Sua idade atual em anos (Ex.: 24)'
          error={errors.name?.message}
          keyboardType='numeric'
        />

        <Pressable style={styles.button} onPress={handleSubmit(handleCreate)}>
          <Text style={styles.buttonText}>
            Avançar
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  )
}

export default Step

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },

  content: {
    paddingLeft: 16,
    paddingRight: 16
  },

  label: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold'
  },
  
  button: {
    backgroundColor: colors.blue,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold'
  }
})