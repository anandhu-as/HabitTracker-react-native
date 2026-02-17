import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2f3",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  formCard: {
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
    marginBottom: 8,
    fontWeight: "900",
    color: "#1a1a1a",
    fontSize: 28,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 32,
    color: "#666",
    fontSize: 16,
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
});
