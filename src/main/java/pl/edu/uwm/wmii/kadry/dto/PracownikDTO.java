package pl.edu.uwm.wmii.kadry.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import pl.edu.uwm.wmii.kadry.enums.EStanowisko;
import pl.edu.uwm.wmii.web.rest.dto.base.BaseDTO;

/**
 * Created by wojciech.baczewski on 2016-03-29.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class PracownikDTO extends BaseDTO {

    private String imie;
    private String nazwisko;
    private String pesel;
    private EStanowisko stanwisko;
    private UmowaDTO umowa;
    private AdresDTO adres;
}
