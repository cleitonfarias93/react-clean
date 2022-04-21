import { HttpPostParams } from '@/data/protocols/http'
import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import faker from '@faker-js/faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement({ key: faker.random.alphaNumeric(10) })
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const postRequest = mockPostRequest()

    const sut = makeSut()
    await sut.post(postRequest)
    expect(mockedAxios.post).toHaveBeenCalledWith(postRequest.url, postRequest.body)
  })
})
