class NavbarState {
    // TypeScript otomatis mendeteksi tipe data boolean
    searching = $state(false);

    search = (): void => {
        this.searching = true;
    };

    unsearch = (): void => {
        this.searching = false;
    };
}

export const navbarState = new NavbarState();