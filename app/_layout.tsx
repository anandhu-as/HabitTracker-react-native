import { Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";

const RouteGuard = ({ children }: { children: React.ReactNode }) => {
  const isAuth = false;
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
      router.replace("/auth");
    }
  }, [isAuth]);

  return children;
};

export default function RootLayout() {
  return (
    <RouteGuard>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auth" />
      </Stack>
    </RouteGuard>
  );
}
