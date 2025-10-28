import { defineStore } from 'pinia'
import { ref } from 'vue'

type Account = {
  name: string
  email: string
  avatar: string
}

const initAccount: Account = {
  name: 'Wilbur',
  email: '744534984cwl@gmail.com',
  avatar: '',
}

export const useAccountStore = defineStore('account', () => {
  const account = ref<Account>({ ...initAccount })

  const update = (newAccount: Partial<Account>) => {
    account.value = { ...account.value, ...newAccount }
  }

  const clear = () => {
    account.value = { ...initAccount }
  }

  return { account, update, clear }
})
