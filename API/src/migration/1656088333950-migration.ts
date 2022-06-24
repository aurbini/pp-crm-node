import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1656088333950 implements MigrationInterface {
    name = 'migration1656088333950'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`notes\` DROP FOREIGN KEY \`donorID\``);
        await queryRunner.query(`DROP INDEX \`donorID_idx\` ON \`notes\``);
        await queryRunner.query(`ALTER TABLE \`notes\` CHANGE \`donorID\` \`donorId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`ID\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`FirstName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`LastName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`Email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`Phone\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`PasswordSalt\` varbinary(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`PasswordHash\` varbinary(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`DateOfBirth\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`CreatedOn\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`LastActive\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`Gender\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`IsMasterAdmin\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`IsValidated\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`IsPortalUser\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`firstName\` \`firstName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`middleName\` \`middleName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`lastName\` \`lastName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`finalName\` \`finalName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`email\` \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`phone\` \`phone\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`street1\` \`street1\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`street2\` \`street2\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`city\` \`city\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`state\` \`state\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`stateID\` \`stateID\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`zip\` \`zip\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`isIndividual\` \`isIndividual\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`notes\` ADD CONSTRAINT \`FK_80cd121e36eab52a63961de037e\` FOREIGN KEY (\`donorId\`) REFERENCES \`donors\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`notes\` DROP FOREIGN KEY \`FK_80cd121e36eab52a63961de037e\``);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`isIndividual\` \`isIndividual\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`occupation\` \`occupation\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`zip\` \`zip\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`stateID\` \`stateID\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`state\` \`state\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`city\` \`city\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`street2\` \`street2\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`street1\` \`street1\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`phone\` \`phone\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`email\` \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`finalName\` \`finalName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`lastName\` \`lastName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`middleName\` \`middleName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`donors\` CHANGE \`firstName\` \`firstName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`IsPortalUser\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`IsValidated\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`IsMasterAdmin\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`Gender\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`LastActive\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`CreatedOn\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`DateOfBirth\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`PasswordHash\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`PasswordSalt\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`Phone\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`Email\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`LastName\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`FirstName\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`ID\``);
        await queryRunner.query(`ALTER TABLE \`notes\` CHANGE \`donorId\` \`donorID\` int NULL`);
        await queryRunner.query(`CREATE INDEX \`donorID_idx\` ON \`notes\` (\`donorID\`)`);
        await queryRunner.query(`ALTER TABLE \`notes\` ADD CONSTRAINT \`donorID\` FOREIGN KEY (\`donorID\`) REFERENCES \`donors\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
