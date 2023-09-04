-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `birth` DATETIME(3) NOT NULL,
    `number_cin` VARCHAR(191) NOT NULL,
    `createdAtCin` DATETIME(3) NOT NULL,
    `delivery_cin` VARCHAR(191) NOT NULL,
    `starting_point` VARCHAR(191) NOT NULL,
    `ending_point` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
