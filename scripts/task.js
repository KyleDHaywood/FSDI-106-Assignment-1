class Task {
  constructor(
    isImportant,
    title,
    location,
    description,
    participants,
    dueDate,
    color
  ) {
    this.isImportant = isImportant;
    this.title = title;
    this.description = description;
    this.location = location;
    this.participants = participants;
    this.color = color;
    this.dueDate = dueDate;
  }
}
