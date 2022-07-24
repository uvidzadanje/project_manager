import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1658693697852 implements MigrationInterface {
    name = 'migration1658693697852'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee\` ADD \`username\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD \`password\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP COLUMN \`username\``);
    }

}
