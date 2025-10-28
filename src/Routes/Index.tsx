import Layout from 'Layout';
import NonAuthLayout from 'Layout/NonLayout';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { authProtectedRoutes, publicRoutes } from './allRoutes';
import AuthProtected from './AuthProtected';

const RouteIndex = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {authProtectedRoutes.map((route: any, idx: number) => (
            <Route
              key={idx}
              path={route.path}
              element={
                <AuthProtected>
                  <Layout>
                    <route.component />
                  </Layout>
                </AuthProtected>
              }
            />
          ))}
          {publicRoutes.map((route: any, idx: number) => (
            <Route
              path={route.path}
              key={idx}
              element={
                <NonAuthLayout>
                  <route.component />
                </NonAuthLayout>
              }
            />
          ))}
        </Routes>
      </Suspense>
    </React.Fragment>
  );
};

export default RouteIndex;
