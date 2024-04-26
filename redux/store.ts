import { configureStore } from "@reduxjs/toolkit";
import mobileMenuReducer from "./slice/mobileMenu-slice";
import SidebarReducer from "./slice/dashboardSidebar-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { jobsApi } from "./features/getJobs";
import { setupListeners } from "@reduxjs/toolkit/query";
import { UserApi } from "./features/User";
import { OrganizationApi } from "./features/Organization";

export const store = configureStore({
  reducer: {
    mobileMenuReducer,
    SidebarReducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
    [UserApi.reducerPath]: UserApi.reducer,
    [OrganizationApi.reducerPath]: OrganizationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      jobsApi.middleware,
      UserApi.middleware,
      OrganizationApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);
