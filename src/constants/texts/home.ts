export const HOME_TEXTS = {
  title: "Home page",
  greetingDescription: "Keep up the good pace, you are doing great with your hydration today.",
  progress: {
    title: "Today's progress",
    addDrinkButton: "Add Water",
  },
  metrics: {
    remaining: "Remaining",
    remainingDone: "Daily target accomplished",
    remainingInProgress: "Drink steadily throughout the day",
    weeklyAverage: "Weekly Average",
    weeklyAverageDescription: "Per day with drinks this week",
    nextReminder: "Next Reminder",
    nextReminderDescription: "Scheduled interval notification",
    remindersOff: "Off",
    remindersOffDescription: "Turn on reminders in settings",
  },
  waterLog: {
    title: "Today's drinks",
    entriesRecorded: (count: number) =>
      `${count} ${count === 1 ? "entry" : "entries"} recorded today`,
    itemTitle: "Water",
    emptyTitle: "No drinks recorded yet",
    emptyDescription: 'Click "Add water" to log your first intake',
  },
  cupSizes: {
    sip: "Sip",
    smallGlass: "Small glass",
    standardGlass: "Standard glass",
    tallGlass: "Tall glass",
    favoriteMug: "Favorite mug",
    sportBottle: "Sport bottle",
    largeBottle: "Large bottle",
    literBottle: "Liter bottle",
  },
  addWaterModal: {
    addTitle: "Add Drink",
    editTitle: "Edit Drink",
    description: "Pick a cup size or enter a custom amount",
    portionSizeLabel: "Portion size",
    amountLabel: "Amount in ml",
    cancelButton: "Cancel",
    addButton: "Add Drink",
    saveButton: "Save Changes",
  },
  overhydration: {
    title: "Daily goal exceeded",
    message: "Listen to your body, drinking too much water can be dangerous.",
  },
  deleteModal: {
    title: "Delete entry?",
    message: (ml: number, time: string) =>
      `${ml} ml logged at ${time} will be removed. This can't be undone.`,
  },
  toasts: {
    added: (ml: number) => `Added ${ml} ml of water!`,
    updated: "Drink entry updated",
    removed: "Entry removed successfully",
  },
} as const;
