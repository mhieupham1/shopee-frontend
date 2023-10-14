import cls from "classnames";
//component
import { Col, Row } from "antd";
import { Input } from 'antd';
const { Search } = Input;
//styles
import styles from './style.module.scss';
//icon
import IconApp from "@images/svg/IconApp";
import IconCart from "@images/svg/IconCart";


export default function Header () {
    const handleOnSearch = (e: string) => {
        console.log(e);
    }

    const handleOnChange = (e:any) => {
        console.log(e.target.value);
    }

    return (
        <>
            <div className={cls(styles.headerTop)}>
                <div className={cls(styles.navbarWrapper)}>
                    <div className={cls(styles.navbar)}>
                        <a href={'#'} className={styles.navbarButton}>Kênh người bán</a>
                        <a href={'#'} className={styles.navbarButton}>Trở thành người bán shopee</a>
                        <a href={'#'} className={styles.navbarButton}>Tải ứng dụng</a>
                        <p className={styles.navbarButton}>Kết nối</p>
                    </div>
                    <div className={cls(styles.navbar)}>
                        <p className={styles.navbarButton}>Thông báo</p>
                        <a href={'#'} className={styles.navbarButton}>Hỗ trợ</a>
                        <p className={styles.navbarButton}>Tiếng việt</p>
                        <p className={styles.navbarButton}>Đăng ký</p>
                        <p className={styles.navbarButton}>Đăng nhập</p>
                    </div>
                </div>
                <div className={cls(styles.navbarSearchBox)}>
                    <Row align="middle">
                        <Col span={4}>
                            <div className={cls('d-flex', 'justify-content-center')}>
                                <a href="#">
                                    <IconApp />
                                </a>
                            </div>
                        </Col>
                        <Col span={16}>
                            <div className={cls(styles.searchHeaderBox)}>
                                <Search
                                    placeholder="Shopee bao ship 0Đ - Đăng ký ngay!"
                                    onSearch={handleOnSearch}
                                    onChange={handleOnChange}
                                    className={cls(styles.inputSearchBox)}
                                    size="large"
                                />
                                <div className={cls(styles.keywordSearchBox)}>
                                    <a href="#">Điện Thoại Giá Rẻ 1k</a>
                                    <a href="#">Điện Thoại Giá Rẻ 1k</a>
                                    <a href="#">Điện Thoại Giá Rẻ 1k</a>
                                    <a href="#">Điện Thoại Giá Rẻ 1k</a>
                                    <a href="#">Điện Thoại Giá Rẻ 1k</a>
                                </div>
                            </div>
                        </Col>
                        <Col span={4}>
                            <div className={cls('d-flex', 'justify-content-center')}>
                                <a href="#">
                                    <IconCart />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}