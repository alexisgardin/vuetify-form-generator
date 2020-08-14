export interface OptionSelectField {
    items: string[];
    disabled: boolean;
    readonly: boolean;
    chips: boolean;
    multiple: boolean;
    appendIcon: boolean;
    appendSlot: boolean;
    appendItemSlot: boolean;
    prependIcon: boolean;
    prependSlot: boolean;
    prependItemSlot: boolean;
    selectSlot: boolean;
    model: string;
}
