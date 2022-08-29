/**
 * Sets a property with key {@link Key} of type {@link Type} to value {@link Value}
 */
export type SetProperty<Type, Key extends keyof Type, Value> = Omit<Type, Key> & Record<Key, Value>
