import { StyleSheet } from "react-native";

export const habitStyles = StyleSheet.create({
  listScreen: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    padding: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111",
  },

  emptyText: {
    marginTop: 40,
    textAlign: "center",
    color: "#666",
    fontSize: 15,
  },

  habitCard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },

  habitTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
  },

  habitDescription: {
    marginTop: 6,
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },

  meta: {
    marginTop: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  streak: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  metaText: {
    fontSize: 13,
    color: "#666",
  },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2f3",
  },

  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#39385b",
    paddingBottom: 70,
    fontFamily: "cursive",
  },

  formCard: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 16,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  title: {
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "900",
    color: "#1a1a1a",
    fontSize: 26,
  },

  input: {
    marginBottom: 16,
    backgroundColor: "#ffffff",
  },

  button: {
    marginTop: 12,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: "#39385b",
  },

  toggleButton: {
    marginTop: 16,
  },
  container2: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  frequencyContainer: {
    marginBottom: 24,
  },
  SegmentedButtons: {
    marginBottom: 24,
  },

  addScreen: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    padding: 16,
  },

  addCard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    marginTop: 20,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },

  addTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111",
    marginBottom: 16,
    textAlign: "center",
  },

  addButtonWrapper: {
    padding: 16,
  },

  addButton: {
    borderRadius: 12,
    paddingVertical: 6,
    backgroundColor: "#39385b",
  },
});
