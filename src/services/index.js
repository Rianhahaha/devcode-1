import axios from "axios";

const BASE_URL = "https://api.contact-manager.project.skyshi.io";

export async function getAllContactsData() {
  return await axios.get(`${BASE_URL}/contacts`).catch((error) => {
    return error;
  });
}

export async function addNewContact(payload) {
  return await axios.post(`${BASE_URL}/contacts`, payload).catch((error) => {
    return error;
  });
}

// TODO:
// 1. Buat sebuah fungsi untuk menghapus data kontak dengan mengirimkan id sebagai params dari kontak yang akan dihapus ke API menggunakan endpoint /contacts, axios method yang digunakan adalah delete
// 2. Buat sebuah fungsi untuk mengubah data kontak dengan mengirimkan id sebagai params dari kontak yang akan diubah beserta dengan data perubahan terbaru dari kontak tersebut ke API menggunakan endpoint /contacts, axios method yang digunakan adalah put
export async function deleteContact(id) {
    return await axios.delete(`${BASE_URL}/contacts/${id}`).catch((error) => {
      return error;
    });
  }

  export async function updateContact(payload) {
    return await axios.put(`${BASE_URL}/contacts/${payload.id}`, payload).catch((error) => {
        return error;
      });
  }