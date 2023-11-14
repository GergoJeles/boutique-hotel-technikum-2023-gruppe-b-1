import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_URL } from '../config/constants.js'

export const useRoomStore = defineStore('rooms', {
  state: () => ({
    rooms: [],
    init: false,
  }),
  actions: {
    initRooms(force) {
      if (this.init && !force) {
        return
      }
      axios.get(`${BASE_URL}/rooms`).then((response) => {
        this.rooms = response.data
        this.init = true
      })
    },
    getRoomById(id) {
      return this.rooms.find(room => room.id === id)
    },
    bookRoom(id, form) {
      console.log('bookRoom', id, form)
    }
  }
})
