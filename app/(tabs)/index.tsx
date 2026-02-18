import { client, DATABASE_ID, databases, HABITS_COLLECTION_ID } from "@/lib/appwrite";
import { useAuth } from "@/lib/auth-context";
import { habitStyles } from "@/styles/styles";
import { Habit } from "@/Types/types";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Query } from "react-native-appwrite";
import { Button, Text } from "react-native-paper";

export default function Index() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const { user, signOut } = useAuth();
  const fetchHabits = async () => {
    if (!user?.$id) return;
    try {
      const response = await databases.listDocuments<Habit>(
        DATABASE_ID,
        HABITS_COLLECTION_ID,
        [Query.equal("user_id", [user.$id])]
      );
      setHabits(response.documents);
    } catch (error) {
      console.error("Failed to fetch habits:", error);
    }
  };

  useEffect(() => {
    if (!user?.$id) return;


    fetchHabits();

    const unsubscribe = client.subscribe(
      `databases.${DATABASE_ID}.collections.${HABITS_COLLECTION_ID}.documents`,
      (event) => {
        const isHabitChange =
          //if someone add, update, or delete a habit the app write will push events so that the habits will be displayed in  the homepage,we dont have to refresh the page...
          event.events.includes("databases.*.collections.*.documents.*.create") ||
          event.events.includes("databases.*.collections.*.documents.*.update") ||
          event.events.includes("databases.*.collections.*.documents.*.delete");

        if (isHabitChange) {
          fetchHabits();
        }
      }
    );


    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <ScrollView
      style={habitStyles.listScreen}
      showsVerticalScrollIndicator={false}
    >

      <View style={habitStyles.header}>
        <Text style={habitStyles.headerTitle}>Today’s Habits</Text>
        <Button mode="text" textColor="#39385b" onPress={signOut}>
          Sign out
        </Button>
      </View>


      {habits.length === 0 && (
        <Text style={habitStyles.emptyText}>
          No habits yet… Add your first habit!
        </Text>
      )}

      {habits.map((habit) => (
        <View key={habit.$id} style={habitStyles.habitCard}>
          <Text style={habitStyles.habitTitle}>{habit.title}</Text>

          {habit.description ? (
            <Text style={habitStyles.habitDescription}>
              {habit.description}
            </Text>
          ) : null}

          <View style={habitStyles.meta}>
            <View style={habitStyles.streak}>
              <MaterialCommunityIcons
                name="fire"
                size={18}
                color="#ff9800"
              />
              <Text style={habitStyles.metaText}>
                {habit.streak_count} day streak
              </Text>
            </View>

            <Text style={habitStyles.metaText}>
              {habit.frequency}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
