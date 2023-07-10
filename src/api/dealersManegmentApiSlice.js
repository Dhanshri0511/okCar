import { apiSlice } from "./apiSlice";
import { createSlice } from '@reduxjs/toolkit';
const USERS_URL = "/admin";
const token = localStorage.getItem("userToken");

export const dealersManegmentApiSlice = apiSlice.injectEndpoints({

  endpoints: (builder) => ({

    addDealer: builder.mutation({

      query: (body) => ({
        url: `/account/register `,
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`
        },
        body: body,
      }),

      invalidatesTags: ["Dealer"],
    }),
    getAllDealer: builder.query({
      query: (userToken) => ({
        transformResponse: console.log(userToken),
        url: `/dealer/allDealers/0`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Dealer"],
    }),
    getDealer: builder.query({
      query: ({ id }) => ({
        transformResponse: console.log(id),
        url: `/dealer/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Dealer"],
    }),

    deleteDealer: builder.mutation({
      query: (body) => ({
        transformResponse:console.log(body),
        url: `/dealer/delete/${body}`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
        body
      }),
      invalidatesTags: ['Dealer'],
    }),

    updateDealer:builder.mutation({
      query:(body) =>({
        transformResponse:console.log(body),
        url:`/dealer/updateDealer/${body.userid}`,
        headers:{
          "Content-Type": "application/json",
          Authorization:`Bearer ${token}`
        },
        method:"PUT",
        body:body
        
      }),
      invalidatesTags: ["Dealer"]
    }),
    getDealerCars: builder.mutation({
      query: ({ id, pageNo }) => ({
        url: `car/dealer/${id}/status/Active?pageNo=0`,
        headers: {
          'Content-Type': "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: 'GET'
      }),
      providesTags:['Dealer']
    }),
    deleteDealerCar: builder.mutation({
      query: ({id}) => ({
        url: `/car/removeCar?carId=${id}`,
        headers: {
          'Content-Type': "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: 'DELETE'
      }),
      providesTags:['Dealer']
    }),
    putDealerCar: builder.mutation({
      query:({ id, body }) =>({
        url:`/car/edit/${id}`,
        headers:{
          "Content-Type": "application/json",
          Authorization:`Bearer ${token}`
        },
        method:"PUT",
        body
        
      }),
    }),
  })
});

const initialState = {
  selectedCar: null
};

export const dealersManegmentCarSlice = createSlice({
  name: 'dealers-car-slice',
  initialState,
  reducers: {
    setSelectedCar: (state, { payload }) => {
      state.selectedCar = payload[0];
    },
  },
});




export const {

  useAddDealerMutation,
  useGetAllDealerQuery,
  useGetDealerQuery,
  useDeleteDealerMutation,
  useGetDealerCarsQuery,
  useGetDealerCarsMutation,
  useGetDealerIdQuery,
  useUpdateDealerMutation,
  useDeleteDealerCarMutation,
  usePutDealerCarMutation,

} = dealersManegmentApiSlice

export const { setSelectedCar } = dealersManegmentCarSlice.actions;

