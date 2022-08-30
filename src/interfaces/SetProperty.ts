/**
 * Sets a property with key {@link Key} to value {@link Value} on type {@link Type}
 */
export type SetProperty<Type, Key extends keyof Type, Value> = Omit<Type, Key> & Record<Key, Value>
