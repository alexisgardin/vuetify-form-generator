import {OptionTextField} from "@/models/OptionTextField";

export const DefaultTextField : OptionTextField = {
    model: "I'm a text field",
    label: "Hey!",
    hint: "Customize me!",
    placeholder: "",
    shaped: false,
    outlined: false,
    rounded: false,
    solo: false,
    singleLine: false,
    filled: false,
    clearable: false,
    persistentHint: false,
    loading: false,
    flat: false,
    counterEn: false,
    counter: 0,
    dense: false,
    required: true
}

export const DefaultOptionSelect = {
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    disabled: false,
    readonly: false,
    chips: false,
    multiple: false,
    appendIcon: false,
    appendSlot: false,
    appendItemSlot: false,
    prependIcon: false,
    prependSlot: false,
    prependItemSlot: false,
    selectSlot: false,
    model: 'Foo',
}
